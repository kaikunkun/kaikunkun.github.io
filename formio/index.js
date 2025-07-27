const Field = Formio.Components.components.field;

class Rating extends Field {
    static schema(...extend) {
        return Field.schema({
            type: 'rating',
            label: 'rating',
            key: 'rating',
        });
    }

    static get builderInfo() {
        return {
            title: 'Rating',
            icon: 'star',
            group: 'basic',
            documentation: '/userguide/#textfield',
            weight: 0,
            schema: Rating.schema()
        };
    }

    constructor(component, options, data) {
        super(component, options, data);
    }

    init() {
        super.init();
    }

    get inputInfo() {
        const info = super.inputInfo;
        return info;
    }

    render(content) {
        return super.render("<div>I am a rating component</div>");
    }

    attach(element) {
        this.loadRefs(element, {
            customRef: 'single'
        });
        return super.attach(element);
    }

    detach() {
        return super.detach();
    }

    destroy() {
        return super.destroy();
    }

    normalizeValue(value, flags = {}) {
        return super.normalizeValue(value, flags);
    }

    getValue() {
        return super.getValue();
    }

    getValueAt(index) {
        return super.getValueAt(index);
    }

    setValue(value, flags = {}) {
        return super.setValue(value, flags);
    }

    setValueAt(index, value, flags = {}) {
        return super.setValueAt(index, value, flags);
    }

    updateValue(value, flags = {}) {
        return super.updateValue(...arguments);
    }
}


Formio.use([
    {
        components: {
            rating: Rating
        }
    }
])

// Formio.createForm(document.getElementById('formio'), {
//     components: [
//         {
//             type: "rating"
//         },
//     ]
// }, {})
