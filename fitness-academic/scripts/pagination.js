let page = 1; // Replace with your initial page value
let totalItems = 1; // Initially set to 1
let totalPages = 1; // Initially set to 1





function handleSelectLimitChange(){
    const selectBox = document.getElementById('select-limit');
    const selectedValue = selectBox.value;
    page=1;
    // Do something with the selected value here
    fetchData({
        page: page,
        limit: selectBox.value,
        totalPages: totalPages,
        filter: filter
      });
  
}

let limit = document.getElementById('select-limit');


limit.addEventListener('change', handleSelectLimitChange);




function generatePagination(currentPage, totalPages) {
  const paginationElement = document.getElementById('pagination');
  page = currentPage;

  paginationElement.innerHTML = ''; // Clear existing pagination links

  if (totalPages > 1) {
      const prevPage = document.createElement('li');
      prevPage.className = 'page-item';
      prevPage.id = 'prevPage';
      const prevLink = document.createElement('a');
      prevLink.className = 'page-link page-link-icon';

      prevLink.innerHTML = '<i data-feather="chevron-right"></i>';
      // Add click event listener to handle previous page navigation
      prevLink.addEventListener('click', () => {
          currentPage = Math.max(currentPage - 1, 1); // Ensure currentPage doesn't go below 1
          fetchData({
            page: currentPage,
            limit: limit.value,
            totalPages: totalPages,
            filter: filter
          });
      });

      prevPage.appendChild(prevLink);
      paginationElement.appendChild(prevPage);

      // Calculate the range of pages to display (maximum of 4)
      const startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(totalPages, startPage + 3);

      for (let i = startPage; i <= endPage; i++) {
          const pageItem = document.createElement('li');
          pageItem.className = 'page-item';
          const pageLink = document.createElement('a');
          pageLink.className = `page-link${i === currentPage ? ' active' : ''}`;

          pageLink.innerHTML = i;
          // Add click event listener to handle page navigation
          pageLink.addEventListener('click', () => {
              currentPage = i;
              fetchData({
                page: currentPage,
                limit: limit.value,
                totalPages: totalPages,
                filter: filter
              });
          });

          pageItem.appendChild(pageLink);
          paginationElement.appendChild(pageItem);
      }

      const nextPage = document.createElement('li');
      nextPage.className = 'page-item';
      nextPage.id = 'nextPage';
      const nextLink = document.createElement('a');
      nextLink.className = 'page-link page-link-icon';

      nextLink.innerHTML = '<i data-feather="chevron-left"></i>';
      // Add click event listener to handle next page navigation
      nextLink.addEventListener('click', () => {
          currentPage = Math.min(currentPage + 1, totalPages); // Ensure currentPage doesn't exceed totalPages
          fetchData({
            page: currentPage,
            limit: limit.value,
            totalPages: totalPages,
            filter: filter
          });
      });

      nextPage.appendChild(nextLink);
      paginationElement.appendChild(nextPage);

      feather.replace();
  }
}

// Event listeners for pagination
document.getElementById('prevPage').addEventListener('click', () => {
    console.log('prevPage')
    if (page > 1) {
        page--;
        fetchData({
            page: page,
            limit: limit.value,
            totalPages: totalPages,
            filter: filter
        })
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    console.log('nextPage')
    if (page < totalPages) {
        page++;
        // page, limit.value, totalItems, totalPages
        fetchData({
            page: page,
            limit: limit.value,
            totalPages: totalPages,
            filter: filter
        })
    }
});

