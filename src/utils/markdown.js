export function parseMarkdown(content) {
    const match = content.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);

    if (!match) {
        return {
            data: {},
            content,
        };
    }

    const frontmatter = match[1];
    const markdown = match[2];

    const data = {};

    frontmatter.split("\n").forEach((line) => {
        const separator = line.indexOf(":");

        if (separator === -1) return;

        const key = line.slice(0, separator).trim();
        let value = line.slice(separator + 1).trim();

        value = value.replace(/^["']|["']$/g, "");

        data[key] = value;
    });

    return {
        data,
        content: markdown,
    };
}