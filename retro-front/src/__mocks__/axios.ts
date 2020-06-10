export default {
    get: jest.fn(() => Promise.resolve({ data: null })),
    patch: jest.fn(() => Promise.resolve({ data: { message: '' } }))
}