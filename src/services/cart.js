import api from '../config/api'

export const getCart = async () => await api.get(`/cart`)

export const addToCart = async (productId) =>
  await api.post(`/cart`, { productId })

export const updateQuantity = async (productId, quantity) =>
  await api.put(`/cart`, { productId, quantity })

export const removeFromCart = async (productId) =>
  await api.delete(`/cart/${productId}`)
