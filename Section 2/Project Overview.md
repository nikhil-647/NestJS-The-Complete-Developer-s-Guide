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

    CPUModule : contains CPUService
    DiskModule : contains DiskService
    PowerModule : contains PowerService
```

```mermaid
classDiagram
    class PowerModule {
    }

    class PowerService {
        +supplyPower()
    }

    class CpuModule {
    }

    class CpuService {
        +compute()
    }

    PowerModule --> PowerService : exports
    CpuModule --> CpuService
    CpuService --> PowerService : injects

    %% Steps Description
    note bottom of CpuService
        1. Add PowerService to PowerModule's exports
        2. Import PowerModule into CpuModule
        3. Inject PowerService into CpuService constructor
    end note
```

