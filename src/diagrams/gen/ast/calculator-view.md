# Class diagram for file calculator
```mermaid
    %%{init: {'theme': 'forest'} }%%
    classDiagram
    direction TD
    %% other possibilites: LR RL DT TB (same as TD)
    class InputField {
        
        
    }
    class OutputField {
        
        
    }
    class InputFieldReference {
        
        
    }
    class CalcExpression {
        <<abstract>>
        
    }
    class LiteralExpression {
        <<abstract>>
        
    }
    class NumberLiteralExpression {
        
        + string value
    }
    class BinaryExpression {
        <<abstract>>
        
    }
    class MultiplyExpression {
        
        
    }
    class PlusExpression {
        
        
    }
    class MinusExpression {
        
        
    }
    class DivideExpression {
        
        
    }
    class INamedConcept {
        <<interface>>
        + identifier name
    }
    CalcExpression <|-- InputFieldReference
CalcExpression <|-- LiteralExpression
LiteralExpression <|-- NumberLiteralExpression
CalcExpression <|-- BinaryExpression
BinaryExpression <|-- MultiplyExpression
BinaryExpression <|-- PlusExpression
BinaryExpression <|-- MinusExpression
BinaryExpression <|-- DivideExpression

        OutputField *-- "1" CalcExpression : expression
BinaryExpression *-- "1" CalcExpression : left

		BinaryExpression *-- "1" CalcExpression : right

        InputFieldReference --> "1" InputField : field

        InputField ..|> INamedConcept

```
