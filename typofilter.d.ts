declare interface Typographus {
    sp_chars: {
        [key: string]: string;
    };
    safeblocks: {
        [key: string]: string;
    };
    safeblock_storage: string[];
    remove_safeblocks(text: string): string;
    return_safeblocks(text: string): string;
    process(text: string): string;
    apply_rules(rules: { [key: string]: string }, text: string): string;
    typo_text(text: string): string;
}

declare interface Window {
    Typographus: Typographus;
} 