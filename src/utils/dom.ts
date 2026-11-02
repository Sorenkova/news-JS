export function getElement<T extends Element>(selector: string, parent: ParentNode = document): T {
    const element = parent.querySelector<T>(selector);

    if (!element) {
        throw new Error(`Element not found: ${selector}`);
    }

    return element;
}
