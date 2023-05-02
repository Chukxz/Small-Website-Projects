import webbrowser



edge_path="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
webbrowser.register('edge', None, webbrowser.BackgroundBrowser(edge_path))
webbrowser.get('edge').open_new_tab('http://127.0.0.1:5500/My Memory Game files/Memory game.html')



