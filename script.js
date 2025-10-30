// Variáveis globais
const API_BASE_URL = 'https://rickandmortyapi.com/api/character';
let currentPage = 1;
let currentFilter = 'all';
let currentSearch = '';

// Elementos do DOM
const cardsContainer = document.getElementById('cardsContainer');
const loading = document.getElementById('loading');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterButtons = document.querySelectorAll('.filter-btn');

// Função para criar um card de personagem
function createCharacterCard(character) {
    // Criar elemento do card
    const card = document.createElement('div');
    card.className = 'card';
    
    // Criar imagem
    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;
    img.className = 'card-image';
    
    // Criar conteúdo do card
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    
    // Nome do personagem
    const name = document.createElement('h3');
    name.className = 'card-name';
    name.textContent = character.name;
    
    // Status
    const statusDiv = document.createElement('div');
    statusDiv.className = 'card-info';
    statusDiv.innerHTML = `<strong>Status:</strong> <span class="status ${character.status.toLowerCase()}">${character.status}</span>`;
    
    // Espécie
    const species = document.createElement('p');
    species.className = 'card-info';
    species.innerHTML = `<strong>Espécie:</strong> ${character.species}`;
    
    // Gênero
    const gender = document.createElement('p');
    gender.className = 'card-info';
    gender.innerHTML = `<strong>Gênero:</strong> ${character.gender}`;
    
    // Origem
    const origin = document.createElement('p');
    origin.className = 'card-info';
    origin.innerHTML = `<strong>Origem:</strong> ${character.origin.name}`;
    
    // Localização
    const location = document.createElement('p');
    location.className = 'card-info';
    location.innerHTML = `<strong>Localização:</strong> ${character.location.name}`;
    
    // Montar o card
    cardContent.appendChild(name);
    cardContent.appendChild(statusDiv);
    cardContent.appendChild(species);
    cardContent.appendChild(gender);
    cardContent.appendChild(origin);
    cardContent.appendChild(location);
    
    card.appendChild(img);
    card.appendChild(cardContent);
    
    return card;
}

// Função para buscar personagens da API
async function fetchCharacters(page = 1, name = '', status = '') {
    try {
        // Mostrar loading
        loading.classList.add('show');
        cardsContainer.innerHTML = '';
        
        // Construir URL com parâmetros
        let url = `${API_BASE_URL}?page=${page}`;
        
        if (name) {
            url += `&name=${name}`;
        }
        
        if (status && status !== 'all') {
            url += `&status=${status}`;
        }
        
        // Fazer requisição
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Nenhum personagem encontrado');
        }
        
        const data = await response.json();
        
        // Esconder loading
        loading.classList.remove('show');
        
        // Renderizar personagens
        renderCharacters(data.results);
        
        // Atualizar paginação
        updatePagination(data.info);
        
    } catch (error) {
        loading.classList.remove('show');
        cardsContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <h2 style="color: #ff0000;">❌ ${error.message}</h2>
                <p>Tente buscar outro personagem ou remova os filtros.</p>
            </div>
        `;
        console.error('Erro ao buscar personagens:', error);
    }
}

// Função para renderizar os personagens na tela
function renderCharacters(characters) {
    // Limpar container
    cardsContainer.innerHTML = '';
    
    // Criar e adicionar cada card
    characters.forEach(character => {
        const card = createCharacterCard(character);
        cardsContainer.appendChild(card);
    });
}

// Função para atualizar informações de paginação
function updatePagination(info) {
    // Atualizar texto da página
    pageInfo.textContent = `Página ${currentPage} de ${info.pages}`;
    
    // Habilitar/desabilitar botões
    prevBtn.disabled = !info.prev;
    nextBtn.disabled = !info.next;
}

// Função para ir para página anterior
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        fetchCharacters(currentPage, currentSearch, currentFilter);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Função para ir para próxima página
function nextPage() {
    currentPage++;
    fetchCharacters(currentPage, currentSearch, currentFilter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para buscar por nome
function searchCharacter() {
    currentSearch = searchInput.value.trim();
    currentPage = 1;
    fetchCharacters(currentPage, currentSearch, currentFilter);
}

// Função para filtrar por status
function filterByStatus(status) {
    currentFilter = status;
    currentPage = 1;
    
    // Atualizar botões ativos
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    fetchCharacters(currentPage, currentSearch, currentFilter);
}

// Event Listeners
prevBtn.addEventListener('click', previousPage);
nextBtn.addEventListener('click', nextPage);
searchBtn.addEventListener('click', searchCharacter);

// Buscar ao pressionar Enter no input
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchCharacter();
    }
});

// Filtros de status
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const status = btn.getAttribute('data-status');
        filterByStatus(status);
    });
});

// Carregar personagens ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    fetchCharacters(currentPage);
});