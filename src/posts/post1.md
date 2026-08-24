---

title: "When Missing Rate Limiting Leads to a Critical Authentication Finding: A Real-World Case Study"
date: "2026-07-06"
description: "How an account enumeration issue combined with missing authentication rate limiting led to a critical security finding."
image: "/images/rate-limiting.png"
----------------------------------

# When Missing Rate Limiting Leads to a Critical Authentication Finding

Hey! It's been quite a while since my last article, but I'm excited to start publishing consistently again.

I'll be covering web application security, bug bounty research, CTFs, penetration testing, and the lessons I learn along the way.

Let's start with one of the most interesting authentication issues I've ever reported.

![Authentication testing](/images/image1-post1.jpeg)

## Initial Discovery

So, let's talk about the critical vulnerability I found in what we'll call **example.com**.

I started by testing the login functionality of the main application.

Since I had only discovered the login page about 10 minutes earlier, I simply began interacting with it, clicking through the functionality and looking for anything interesting.

I created a new account and logged in successfully.

My first test was to enter a valid email address with an incorrect password.

- Email: `hunterxhunter_@wearehackerone.com`
- Password: `1234567`

The application responded with:

> Password is incorrect.

That immediately caught my attention.

Instead of stopping there, I started wondering:

> What happens if the email doesn't exist?

To test this, I slightly modified the email address by adding a few extra characters while keeping the same password.

- Email: `hunterxhunter123_@wearehackerone.com` |
- Password: `1234567`

This time, the application responded with:

> This email is not registered.

At this point, I confirmed that the login endpoint returned different error messages depending on whether the supplied email address existed.

This allowed an attacker to enumerate valid accounts simply by observing the authentication responses.

## Account Enumeration

The root cause of this issue was improper backend authentication error handling.

Instead of returning a generic response such as:

> Invalid email or password.

for all failed login attempts, the backend disclosed whether an email address was registered.

### Vulnerable backend logic

```javascript
const user = await findUserByEmail(email);

if (!user) {
    return "Email not found";
}

if (!verifyPassword(password)) {
    return "Password incorrect";
}
```

### Secure backend logic

```javascript
const user = await findUserByEmail(email);

if (!user || !verifyPassword(password)) {
    return "Invalid email or password";
}
```

At this point, the finding was interesting, but I wanted to understand its potential impact.

Account enumeration alone doesn't necessarily tell the whole story.

So I started looking deeper into the authentication mechanism.

## Looking for More Impact

Since I already knew the email address was valid, I started thinking about repeated authentication attempts.

At first, I noticed there was a CAPTCHA.

I almost gave up on the idea because I assumed it would prevent automated attacks.

But I decided to test the behavior anyway.

I entered a valid email address with an incorrect password, completed the CAPTCHA, and repeatedly attempted to log in.

I wanted to see whether the application would:

* Trigger rate limiting
* Require another CAPTCHA
* Temporarily lock the account
* Introduce a delay
* Block the client after repeated failures

After around 10 to 15 failed login attempts, nothing happened.

There were no rate-limit errors, no additional CAPTCHA challenges, no account lockout, and no noticeable delay.

To confirm my observations, I entered the correct password using the same session and was immediately logged in.

At this point, it became clear that the CAPTCHA alone was not providing effective protection against repeated authentication attempts.

## Testing the Authentication Endpoint

The next step was to inspect the actual login request.

I intercepted the request using **Burp Suite** and sent it to **Intruder** for controlled testing.

I configured a password wordlist and tested how the endpoint behaved when presented with repeated authentication attempts.

The important observation wasn't simply whether a particular password could be discovered.

The important observation was the server-side behavior.

The endpoint continued processing authentication attempts without introducing effective rate limiting or account lockout controls.

This demonstrated that the application lacked an important layer of protection around the authentication process.

## Expanding the Scope

After confirming that the issue affected the main login page, I wanted to determine whether it was limited to a single endpoint or whether the same authentication implementation was used elsewhere.

I began searching for additional login portals across:

```text
*.example.com
```

To discover authentication-related pages, I used search-engine queries such as:

> `site:example.com inurl:login`

> `site:example.com inurl:signin`

> `site:example.com inurl:auth`

> `site:example.com "Sign In"`

> `site:example.com "Log In"`

I also used **GoSpider** to crawl the target and discover additional endpoints.

You can find the project here:

[GoSpider](https://github.com/jaeles-project/gospider)

Search-engine discovery helped identify publicly indexed authentication-related endpoints, while GoSpider helped enumerate additional URLs that weren't immediately visible through normal navigation.

Once I had a list of potential login endpoints, I tested each authentication portal individually.

To my surprise, several of them exhibited similar behavior.

This indicated that the issue was not necessarily isolated to a single login page, but could be related to a broader authentication implementation.

## Reporting the Finding

At this point, I had gathered enough evidence to document my findings and submit the report to the security team.

![Initial report](/images/image1-post1.jpeg)

> The report was triaged very quickly. It was one of my favorite programs to work with.

The report was initially classified as **Medium** severity.

Based on the evidence I had collected and the potential impact, I believed the issue warranted further investigation.

So I continued analyzing the authentication flow.

## Finding Another Authentication Endpoint

I decided to dig even deeper.

I continued searching for additional authentication portals and testing the behavior of each endpoint.

Eventually, I came across another login endpoint:

```text
https://admin-portal-example.com/login
```

And there it was.

Another authentication endpoint exhibiting the vulnerable behavior.

I immediately updated my report with the additional findings and provided the security team with the new evidence.

After reviewing the expanded impact, the security team upgraded the severity from **Medium** to **Critical**.

![Severity upgrade](/images/image3-post1.jpeg)

> Finally. ❤️

## What I Learned

This finding reminded me of something important about web application security:

**A vulnerability rarely exists in isolation.**

An account enumeration issue might initially appear to be a relatively small information disclosure.

Missing rate limiting might also appear to be a separate authentication weakness.

But when you understand how the pieces interact and continue investigating the application's authentication architecture, the overall impact can become much more significant.

The most important part of this research wasn't finding a particular payload.

It was asking:

> What else can this vulnerability enable?

That question is often what turns an interesting observation into a meaningful security finding.

## Conclusion

And that's the end of this write-up!

I hope you enjoyed reading it and found it useful.

This is just the beginning. I have plenty of interesting research, CTFs, bug bounty stories, and security write-ups that I'll be sharing over the coming weeks.

If you enjoyed this article, feel free to share it and tag me on X.

I'd love to hear your thoughts, answer your questions, or discuss different approaches to the findings.

Thanks for reading, and I'll see you in the next write-up. 🚀
