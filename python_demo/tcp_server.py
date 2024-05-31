import asyncio

async def task1():
    print("Task 1 started")
    await asyncio.sleep(2)
    print("Task 1 finished")
    return "Task 1 result"

async def task2():
    print("Task 2 started")
    await asyncio.sleep(1)
    print("Task 2 finished")
    return "Task 2 result"

async def task3():
    print("Task 3 started")
    await asyncio.sleep(3)
    print("Task 3 finished")
    return "Task 3 result"


class Server:
    def __init__(self, ip, port):
        self._s_ip = ip
        self._s_port = port
        self._server = None

    @staticmethod
    async def _tcp_handler(self, reader, writer):
        data = await reader.read(100)
        message = data.decode()
        addr = writer.get_extra_info('peername')

        print(f"Received {message!r} from {addr!r}")

        if message == "Task 1":
            await task1()
        elif message == "Task 2":
            await task2()
        elif message == "Task 3":
            await task3()

        print(f"Send: {message!r}")
        writer.write(data)
        await writer.drain()

        print(f"Closing the connection")
        writer.close()

    async def start(self):
        loop = asyncio.get_running_loop()
        self._server = await loop.create_server(self._tcp_handler, self._s_ip, self._s_port)
        await self._server.serve_forever()

server = Server('127.0.0.1', 8888)
asyncio.run(server.start())