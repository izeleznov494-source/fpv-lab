const structure = [
    { title: "1. Основные компоненты", children: [
        { title: "Рама", children: [{ title: "Рама" }] },
        { title: "Моторы", children: [{ title: "Моторы" }] },
        { title: "ESC", children: [{ title: "ESC" }] }
    ]},
    { title: "2. Режимы", children: [
        { title: "Angle Mode", children: [{ title: "Angle Mode" }] },
        { title: "Acro Mode", children: [{ title: "Acro Mode" }] }
    ]},
    // ... (добавь остальные темы по аналогии)
];

const sidebarMenu = document.getElementById('sidebar-menu');
const readerTitle = document.getElementById('reader-title');
const readerContent = document.getElementById('reader-content');
const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');

// Функция рендера меню
function renderMenu(items, container, level = 0) {
    items.forEach(item => {
        if (item.children) {
            const folder = document.createElement('div');
            folder.className = 'folder';
            
            const header = document.createElement('div');
            header.className = 'folder-header';
            header.innerHTML = `<span>📁</span><span>${item.title}</span><span class="arrow">▶</span>`;
            
            const content = document.createElement('div');
            content.className = 'folder-content';
            
            header.addEventListener('click', (e) => {
                e.stopPropagation(); // Чтобы не закрывалось меню
                folder.classList.toggle('open');
                if(!folder.classList.contains('open')) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
            
            folder.appendChild(header);
            folder.appendChild(content);
            container.appendChild(folder);
            
            renderMenu(item.children, content, level + 1);
        } else {
            const doc = document.createElement('div');
            doc.className = 'doc';
            doc.innerHTML = `<span></span> <span>${item.title}</span>`;
            
            doc.addEventListener('click', (e) => {
                e.stopPropagation();
                // Меняем контент в правой части
                readerTitle.textContent = item.title;
                readerContent.textContent = `Тут будет содержимое файла: ${item.title}.docx`;
                
                // Если мобилка - закрываем меню
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('open');
                    overlay.style.display = 'none';
                }
            });
            container.appendChild(doc);
        }
    });
}

// Открытие/закрытие меню на мобильных
menuToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
});

// Запуск
renderMenu(structure, sidebarMenu);
