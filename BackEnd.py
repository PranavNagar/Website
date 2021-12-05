import socket,random


# Define socket host and port
SERVER_HOST = '0.0.0.0'
SERVER_PORT = 80

# Create socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_socket.bind((SERVER_HOST, SERVER_PORT))
server_socket.listen(1)
print('Listening on port %s ...' % SERVER_PORT)

while True:    
    # Wait for client connections
    client_connection, client_address = server_socket.accept()
    # Get the client request
    request = client_connection.recv(1024).decode()
    print(request)
    # Parse HTTP headers
    headers = request.split('\n')
    filename = headers[0].split()[1]
    # Get the content of the file
    print('here:'+headers[0].split()[1])
    if filename == '/':
        filename = '/index.html'
    if filename == '/favicon.ico':
        filename = random.choice(['/Favicon.ico','/Favicon2.ico'])
    try:
        fin = open('Web'+filename[0:],'rb')
        content = fin.read()
        fin.close()
        response = 'HTTP/1.0 200 OK\n\n'.encode() + content
    except (FileNotFoundError,PermissionError):
        fin = open('Web/Index 404.html','rb')
        content = fin.read()
        response = 'HTTP/1.0 404 NOT FOUND\n\n'.encode()+ content
    # Send HTTP response
    client_connection.sendall(response)
    client_connection.close()    # Send HTTP response
# Close socket
server_socket.close()
