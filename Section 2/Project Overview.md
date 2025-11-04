```mermaid
classDiagram
    class ComputerModule {
        +run()
    }

    class CPUService {
        +compute()
    }

    class DiskService {
        +getData()
    }

    class PowerService {
        +supplyPower()
    }

    class CPUModule {
    }

    class DiskModule {
    }

    class PowerModule {
    }

    ComputerModule --> CPUModule
    ComputerModule --> DiskModule
    CPUModule --> PowerModule
    DiskModule --> PowerModule

    CPUModule *-- CPUService : contains
    DiskModule *-- DiskService : contains
    PowerModule *-- PowerService : contains
```

```text
+------------------+         +------------------+
|   Power Module   |         |    CPU Module    |
|------------------|         |------------------|
| PowerService     |         | CpuService       |
| supplyPower()    |         | compute()        |
+--------+---------+         +--------+---------+
         |                              ^
         |   inject PowerService        |
         +------------------------------+

Steps:
1. Add PowerService to PowerModule's exports
2. Import PowerModule into CpuModule
3. Inject PowerService into CpuService constructor
```
