function createAnalytics () {
    let counter = 0
    let isDestroyed = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyed = true
        },

        getClicks() {
            if (isDestroyed) {
                return 'Analytics is destroyed'
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