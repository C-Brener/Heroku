# Heroku

## ***Conceitos Aplicados***

*Aplicando TypeScript ao Projeto
* Tipando Propriedades

```
    interface inputType {
        propsIcon:Array;
        propsPlaceHolder:string
        propPassword?:boolean
    }

    export function Input({propsIcon, propsPlaceHolder, propPassword = false}: inputType)
```
### A interface serve para passarmos as tipagens das propriedades que usaremos a seguir. Como no código acima a interface foi usada para tipar as propsIcon, propsPlaceHolder, propsPassword.

### Vale salientar que quando passamos uma propriedade e queremos que ela seja opcional colocamos o simbolo de "?" no nome da propriedade.
