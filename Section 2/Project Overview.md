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

    %% Proper syntax for attaching notes
    note bottom of CPUService
        1. Add PowerService to PowerModule's exports
        2. Import PowerModule into CPUModule
        3. Inject PowerService into CPUService constructor
    end note

    PowerModule --> PowerService : exports
    CPUModule --> CPUService

    %% Show import from one module to another
    CPUModule --> PowerModule : imports

    CPUService --> PowerService : injects
```