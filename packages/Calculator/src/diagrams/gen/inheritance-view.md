# Inheritance diagram for language CalculatorModel
```mermaid
    %%{init: {'theme': 'forest'} }%%
    classDiagram
    direction TD
    %% other possibilites: LR RL DT TB (same as TD)
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
    CalcExpression <|-- InputFieldReference
CalcExpression <|-- LiteralExpression
LiteralExpression <|-- NumberLiteralExpression
CalcExpression <|-- BinaryExpression
BinaryExpression <|-- MultiplyExpression
BinaryExpression <|-- PlusExpression
BinaryExpression <|-- MinusExpression
BinaryExpression <|-- DivideExpression

```
