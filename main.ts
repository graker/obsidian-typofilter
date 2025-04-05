import { Plugin, MarkdownView, Notice } from 'obsidian';
import 'typofilter.js';

export default class TypoFilterPlugin extends Plugin {
    async onload() {
        this.addRibbonIcon('wand-sparkles', 'Apply TypoFilter', () => {
            this.applyTypoFilter();
        });

        this.addCommand({
            id: 'apply-typofilter',
            name: 'Apply TypoFilter',
            editorCallback: (editor) => {
                this.processEditorContent(editor);
            }
        });
    }

    onunload() {
    }

    applyTypoFilter() {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (view) {
            this.processEditorContent(view.editor);
        } else {
            new Notice('Please open a markdown file first');
        }
    }

    processEditorContent(editor: any) {
        const selection = editor.getSelection();
        const content = editor.getValue();

        // Add code block markers to safeblocks
        window.Typographus.safeblocks['```'] = '```';
        window.Typographus.safeblocks['`'] = '`';

        if (selection) {
            const processed = window.Typographus.process(selection);
            editor.replaceSelection(processed);
        } else {
            const processed = window.Typographus.process(content);
            editor.setValue(processed);
        }
    }
} 