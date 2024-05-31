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


async def main():
    tasks = [task1(), task2(), task3()]
    results = await asyncio.gather(*tasks)
    print(results)


asyncio.run(main())

