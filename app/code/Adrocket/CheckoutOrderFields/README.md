# Mage2 Module Adrocket CheckoutOrderFields

    ``adrocket/module-checkoutorderfields``

 - [Main Functionalities](#markdown-header-main-functionalities)
 - [Installation](#markdown-header-installation)
 - [Configuration](#markdown-header-configuration)
 - [Specifications](#markdown-header-specifications)
 - [Attributes](#markdown-header-attributes)


## Main Functionalities
Sort Order Fields Checkout Magento 2

## Installation
\* = in production please use the `--keep-generated` option

### Type 1: Zip file

 - Unzip the zip file in `app/code/Adrocket`
 - Enable the module by running `php bin/magento module:enable Adrocket_CheckoutOrderFields`
 - Apply database updates by running `php bin/magento setup:upgrade`\*
 - Flush the cache by running `php bin/magento cache:flush`

### Type 2: Composer

 - Make the module available in a composer repository for example:
    - private repository `repo.magento.com`
    - public repository `packagist.org`
    - public github repository as vcs
 - Add the composer repository to the configuration by running `composer config repositories.repo.magento.com composer https://repo.magento.com/`
 - Install the module composer by running `composer require adrocket/module-checkoutorderfields`
 - enable the module by running `php bin/magento module:enable Adrocket_CheckoutOrderFields`
 - apply database updates by running `php bin/magento setup:upgrade`\*
 - Flush the cache by running `php bin/magento cache:flush`


## Configuration




## Specifications

 - Plugin
	- afterCustom_checkout_address_fields_order - Magento\Checkout\Block\Checkout\LayoutProcessor > Adrocket\CheckoutOrderFields\Plugin\Frontend\Magento\Checkout\Block\Checkout\LayoutProcessor


## Attributes



