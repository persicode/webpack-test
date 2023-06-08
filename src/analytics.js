import * as $ from 'jquery'

function createAnalytics () {
    let counter = 0
    let destroyed = false

    const listener = () => counter++

    $(document).on('click', listener)

    return {
        destroy() {
            $(document).off('click', listener)
            destroyed = true
        },

        getClicks() {
            if (destroyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()


// Этот скрипт считает клики по документу

// При analytics.destroy() - сбрасывает кол-во кликов, и пишет в консоль 'Analytics is destroyed' при попытке получить
// клики методом analytics.getClicks()

// Подключаем этот скрипт в <head> потому что он не работает с DOM-элементами