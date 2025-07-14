class MACAddress {
    private regExp!: RegExp;
    private normalized = "";

    constructor(raw: string) {
        this.initializeRegExp();
        this.normalized = this.normalize(raw);
    }

    private initializeRegExp(): void {
        const regExpString = Array
            .from(
                { length: 6 },
                (_, index) => {
                    return `(?:([a-fA-F0-9]{2,2})${index < 5 ? "[\\.\\:-]?" : ""})`;
                }
            )
            .join("");
        this.regExp = RegExp(`^${regExpString}$`, "g");
    }

    private normalize(address: string): string {
        return [...(address.trim()).matchAll(this.regExp)]?.[0]?.slice(1).join("");
    }

    public toString(delimiter = ":", delimiterSpacing = 2, upperCase = true): string {
        if (!this.normalized) {
            return "";
        }

        const result = this.normalized.split("").reduce((acc, val) => {
            let current = acc.pop() || "";
            if (current.length >= delimiterSpacing) {
                current += delimiter;
                acc.push(current);
                current = "";
            }

            current += val;
            acc.push(current);
            return acc;
        }, [""]);

        return result.join("")[upperCase ? "toUpperCase" : "toLowerCase"]();
    }
}

export { MACAddress };