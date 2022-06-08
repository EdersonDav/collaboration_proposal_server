# Back-End Proposta de Colaboração

>Crie uma proposta de colaboração.

[![Author](https://img.shields.io/badge/author-EdersonDav-000000?style=flat-square)](https://github.com/EdersonDav)

# 📌 Índice

- [Recursos](#-recursos)
- [Instalação](#-instalação)
- [Começando](#-começando)
- [Tecnologias Usadas](#-tecnologias-usadas)
- [Créditos](#-créditos)

# 🚀 Recursos

- Criação de uma proposta de colaboração
- Calculos De Valores
- Envio de proposta por email


# 👷🏿 Instalação

**Você precisa instalar o [Node.js](https://nodejs.org/en/download/) e o [Yarn](https://yarnpkg.com/) primeiramente.**

**Para clonar o projeto via HTTPS, execute este comando:**

`git clone https://github.com/EdersonDav/collaboration_proposal_server.git`

### Instalação de dependências

**No terminal, dentro da pasta raiz do projeto, execute o comando**

`yarn`

**Após a instalação de dependências é necessário a criação do arquivo `.env` na pasta raiz do projeto com os valores de:**

~~~javascript
EMAIL_HOST= host do provedor de email (ex: smtp.office365.com )
EMAIL_USER= endereço de email que vai ser enviada a proposta 
EMAIL_SENHA= senha do email que vai ser enviada a proposta 
EMAIL_PORT= porta do provedor de email 
~~~

# 🏃🏿 Começando

### Iniciar servidor

**Por padrão o servidor vai iniciar na porta 5000, para modificar basta editar a porta no arquivo server.ts**

~~~javascript
app.listen(Trocar para a porta desejada, () => {
  console.log('server running on port 5000');
})
~~~

**Após as dependências serem instaladas execute o seguinte comando para o servidor iniciar:**

`yarn dev`

### Rotas

`http://localhost:5000/finantial`

Espera os valores:

~~~javascript
{
	"baseValue": number,
	"workScheduleExemption": number,
}
~~~

Para retorno de: 

~~~javascript
{
	"workScheduleExemptionValue": number,
	"vacationsTwelfth": number,
	"christmasTwelfth": number,
}
~~~

`http://localhost:5000/benefits`

Espera os valores:

~~~javascript
{
	"numberFamilyMembers": number,
	"healthInsurance": number,
}
~~~

Para retorno de: 

~~~javascript
{
	"familyMenbersValue": number,
}
~~~

`http://localhost:5000/proposal`

Espera os valores:

~~~javascript
{
	"baseValue": number;
  "workScheduleExemption": number;
  "workScheduleExemptionValue": number;
  "irsTax": number;
  "vacationsTwelfth": number;
  "christmasTwelfth": number;
  "otherExpenses": number;
  "remoteWorkAllowance": number;
  "communicationsPlafond": number;
  "healthInsurance": number;
  "familyMembersValue": number;
}
~~~

Para retorno de: 

~~~javascript
{
	"deductions":{
    "baseValueSocialSecurity": number,
    "christmasAllowanceTwelfthSocialSecurity": number,
    "vacationsAllowanceTwelfthSocialSecurity": number,
    "baseValueIRS": number,
    "christmasAllowanceTwelfthAllowanceIRS": number,
    "vacationsAllowanceTwelfthAllowanceIRS": number,
  },
  "values":{
    "monthlyGrossValue": number,
    "monthlyNetValue": number,
    "anualGrossValue": number,
    "anualNetValue": number,
    "monthlyBenefits": number,
    "anualBenefits": number,
  },
  "costs":{
    "annualCosts": number,
    "monthlyCosts": number,
    "dailyCosts": number,
  }
}
~~~

`http://localhost:5000/proposal-resume`

Espera os valores:

~~~javascript
{
	"annualCosts": number,
  "anualBenefits": number,
  "anualGrossValue": number,
  "anualNetValue": number,
  "baseValue": number,
  "baseValueIRS": number,
  "baseValueSocialSecurity": number,
  "christmasAllowanceTwelfthAllowanceIRS": number,
  "christmasAllowanceTwelfthSocialSecurity": number,
  "christmasTwelfth": number,
  "collaborationStartDate": string,
  "communicationsPlafond": number,
  "dailyCosts": number,
  "email": string,
  "familyMembersValue": number,
  "healthInsurance": number,
  "includeFamilymembers": string,
  "irsTax": number,
  "monthlyBenefits": number,
  "monthlyCosts": number,
  "monthlyGrossValue": number,
  "monthlyNetValue": number,
  "name": string,
  "numberFamilyMembers": number,
  "otherExpenses": number,
  "remoteWorkAllowance": number,
  "vacationsAllowanceTwelfthAllowanceIRS": number,
  "vacationsAllowanceTwelfthSocialSecurity": number,
  "vacationsTwelfth": number,
  "workScheduleExemption": number,
  "workScheduleExemptionValue": number,
}
~~~

Para envio de email.

# 👨🏿‍💻 Tecnologias Usadas

* [TypeScript](https://www.typescriptlang.org/)
* [NodeJs](https://nodejs.org/en/)
* [Express](https://expressjs.com/)

# ☕ Créditos

## <i>Ederson Davi</i>

[Github](https://github.com/EdersonDav) 👨🏿‍🎓🚀

[LinkedIn](https://www.linkedin.com/in/silvaedersonqueiroz) 👨🏿‍👔
