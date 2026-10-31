import './sources.css';
import { Drawable, Source } from '../../../types';
import { getElement } from '../../../utils/dom';

class Sources implements Drawable<Source[]> {
    public draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = getElement<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = document.importNode(sourceItemTemp.content, true);

            getElement<HTMLElement>('.source__item-name', sourceClone).textContent = item.name;
            getElement<HTMLElement>('.source__item', sourceClone).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        getElement<HTMLElement>('.sources').append(fragment);
    }
}

export default Sources;
