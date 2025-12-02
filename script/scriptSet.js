let previousWords = new Set();

document.getElementById('checkBtn').addEventListener('click', () => {
    let phrase = document.getElementById('inputPhrase').value;

    let words = phrase
        .toLowerCase()
        .replace(/[.,!?;:]/g, '') 
        .split(/\s+/);

    let currentWordsSet = new Set(words);


    let commonWords = [...currentWordsSet].filter(word => previousWords.has(word));

    if (commonWords.length > 0) {
        document.getElementById('result').innerText = commonWords.join(', ');
    } else {
        document.getElementById('result').innerText = 'Спільних слів немає';
    }

    previousWords = new Set([...previousWords, ...currentWordsSet]);

    document.getElementById('inputPhrase').value = '';
});
