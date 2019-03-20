import api from './request'

export const getArticle = () => {
    return api.get('article')
}

export const getArticleById = (id) => {
    return api.get(`article/${id}`)
}
