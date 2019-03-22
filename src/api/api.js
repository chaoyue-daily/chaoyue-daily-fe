import api from './request'

export const getSlogan = () => {
    return api.get('slogan')
}

export const getArticle = () => {
    return api.get('article')
}

export const getArticleById = (id) => {
    return api.get(`article/${id}`)
}
