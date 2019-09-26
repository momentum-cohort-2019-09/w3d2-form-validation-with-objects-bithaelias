class Validation {

    constructor(test, errorMsg) {
        this.test = test
        this.errorMsg = errorMsg || 'is invalid'
    }

    validate(value) {
        return this.test(value)
    }
}

class Field {
    constructor(inputDiv, validations) {
        this.inputDiv = inputDiv
        this.validations = validations || []
    }
}

addErrorMsgs(errorMsgs); {
    let fieldName = this.inputDiv.querySelector('label').innerText
    for (let msg of errorMsgs) {
        const msgNode = document.createElement('p')
        msgNode.classList.add('input-hint', 'text-danger', 'error-msg')
        msgNode.innerText = `${fieldName} ${msg}.`
        this.inputDiv.appendChild(msgNode)
    }
}
markValid(); {
    this.clearErrorMsgs()
    this.inputDiv.classList.add('input-valid')
    this.inputDiv.classList.remove('input-invalid')
}

markInvalid(); {
    this.clearErrorMsgs()
    this.inputDiv.classList.add('input-invalid')
    this.inputDiv.classList.remove('input-valid')
}
getValue(); {
    const input = this.inputDiv.querySelector('input')
    const value = input.value
    return value
}
validate(); {
    const value = this.getValue()
    const errorMsgs = []
    for (let validation of this.validations) {
        if (!validation.validate(value)) {
            errorMsgs.push(validation.errorMsg)
        }
    }
    if (errorMsgs.length === 0) {
        this.markValid()
    } else {
        this.markInvalid()
        this.addErrorMsgs(errorMsgs)
    }

    return errorMsgs.length === 0
}
class Form {
    constructor (domNode, fields) {
      this.domNode = domNode
      this.fields = fields
    }
  
    validate () {
      let valid = true
  
      for (let field of this.fields) {
        const fieldIsValid = field.validate()
        if (!fieldIsValid) {
          valid = false
        }
      }
  
      return valid
    }
  }
  let name = new Field(document.querySelector('#name-field'), [presenceValidation])
let carInfo = new Field(document.querySelector('#car-info-field'), [presenceValidation, nowOrFutureValidation])
let dateParking = new Field(document.querySelector('#start-date-field'))
let form = new Form(document.querySelector('#parking-form'), [name, carInfo, dateparking])

document.querySelector('#parking-form').addEventListener('submit', (event) => {
    event.preventDefault()
    if (form.validate()) {
      let parkingForm = new parkiForm(name.getValue(), carInfo.getValue(), dateParking.getValue())
    }
  })