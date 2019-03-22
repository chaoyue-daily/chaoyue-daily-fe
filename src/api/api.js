import api from './request'

export const getSlogan = () => {
    return api.get('slogan')
}

export const getNews = () => {
    return api.get('article/news')
}

export const getActivities = () => {
    return api.get('article/activities')
}

export const getContributes = () => {
    return api.get('article/contributes')
}

export const getArticleById = (id) => {
    return api.get(`article/${id}`)
}
