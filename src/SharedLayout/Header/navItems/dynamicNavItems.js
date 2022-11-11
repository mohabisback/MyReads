
export const getDynamicNavItems = (books) => {
  let booksSubmenu = books.map(group=>({
      title: group.shortTitle,
      url: '#',
      icon: group.icon,
      submenu: group.books
        .map(book=>({
          title: book.title,
          icon: group.icon,
          url: `/books/${book.id}`,
        }))
        .concat([{
          title: 'See All',
          url: `/books?state=${group.shelf}`,
          icon: 'folder-tree'
        }])
    }))

  return([
    {
      title: 'My Books',
      url: '#',
      icon: 'book-bookmark',
      submenu: booksSubmenu
    }
  ])
}