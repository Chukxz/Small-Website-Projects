import webbrowser

chrome_path="C:\Program Files\Google\Chrome\Application\chrome.exe"
webbrowser.register('chrome', None, webbrowser.BackgroundBrowser(chrome_path))
webbrowser.get('chrome').open_new_tab('http://127.0.0.1:5500/My Memory Game files/Memory game.html')