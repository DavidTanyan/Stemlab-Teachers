//Ирина Левченко
const headerHTML = `
  <a href="index.html">
    <img class="stemlabicon" src="stemlab.png" alt="stemlab"></a>
    <hr>
        <header class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <li class="nav-item"><a href="about_site.html" class="nav-link" aria-current="page">О продукте</a></li>
            <li class="nav-item"><a href="special_info.html" class="nav-link">Особенности</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link">Контакты</a></li>
          </ul>
          </header>
`;

// Добавление в DOM
document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.createElement("div");
    headerContainer.innerHTML = headerHTML;
    document.body.prepend(headerContainer);
});
