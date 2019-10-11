import moment from 'moment'
const allNews = []
const max = 100
for (let i = 1; i <= max; i ++) {
  const date = moment().format('DD MMMM, YYYY hh:mm')
  allNews.push({
    title: `Title ${i}`,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    updated: date,
    image: 'image.jpg'
  },)
}

export default {
  getAll(pageIndex, itemsPerPage, search) {
    let searchLower = (search || '').toLowerCase()
    let filteredNews = allNews
    if (searchLower.trim().length > 0) {
      filteredNews = allNews.filter((news) => {
        return news.title.toLowerCase().includes(searchLower)
          || news.content.toLowerCase().includes(searchLower)
      })
    }

    let data = []
    let index = (pageIndex - 1) * itemsPerPage
    if (index < filteredNews.length) {
      data = filteredNews.slice(index, index + itemsPerPage)
    }
    return {
      total: filteredNews.length,
      data
    }
  }
}
