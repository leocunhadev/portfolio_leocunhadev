/**
 * githubApi.js
 * Utilitário responsável por abstrair chamadas à API do GitHub,
 * lidando com Cache (via LocalStorage) para mitigar o erro
 * "Rate limit exceeded" em ambientes de desenvolvimento e na navegação.
 */

// Tempo de expiração do cache em milissegundos (Ex: 1 hora)
const CACHE_EXPIRATION_MS = 60 * 60 * 1000;

export const fetchWithCache = async (url, customOptions = {}) => {
    // 1. Verificar cache local
    const cachedData = localStorage.getItem(url);
    if (cachedData) {
        try {
            const parsedCache = JSON.parse(cachedData);
            const isExpired = Date.now() - parsedCache.timestamp > CACHE_EXPIRATION_MS;

            // Retorna o cache se ainda estiver válido
            if (!isExpired) {
                console.log(`[Cache Hit] Retornando dados em cache para: ${url}`);
                return parsedCache.data;
            }
        } catch (e) {
            console.warn('Erro ao ler cache do LocalStorage:', e);
        }
    }

    // 2. Fazer o fetch na API do GitHub
    console.log(`[API Fetch] Buscando do GitHub: ${url}`);
    const response = await fetch(url, customOptions);

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Erro HTTP: ${response.status}`);
    }

    const responseData = await response.json();

    // 4. Salvar resposta no cache
    try {
        const cacheObj = {
            timestamp: Date.now(),
            data: responseData
        };
        localStorage.setItem(url, JSON.stringify(cacheObj));
    } catch (e) {
        console.warn('Erro ao salvar no LocalStorage (provável que excedeu limite de espaço):', e);
    }

    return responseData;
};
