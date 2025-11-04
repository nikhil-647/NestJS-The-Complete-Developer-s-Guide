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

```mermaid
classDiagram
    class PowerModule {
    }

    class PowerService {
        +supplyPower()
    }

    class CPUModule {
    }

    class CPUService {
        +compute()
    }

    PowerModule --> PowerService : exports
    CPUModule --> CPUService
    
    %% NEW LINE ADDED: CPUModule imports PowerModule to gain access to exported services
    CPUModule --> PowerModule : imports
    
    CPUService --> PowerService : injects

    %% Steps Description
    note bottom of CPUService
        1. Add PowerService to PowerModule's exports
        2. Import PowerModule into CPUModule (<- This is now shown)
        3. Inject PowerService into CPUService constructor
    end note
```