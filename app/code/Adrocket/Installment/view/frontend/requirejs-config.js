var config = {
    map: {
        '*': {
            installment: 'Adrocket_Installment/js/installment'
        }
    },
    config: {
        mixins: {
            'Magento_Catalog/js/price-box': {
                'Adrocket_Installment/js/price-box-mixin': true
            }
        }
    }
};
