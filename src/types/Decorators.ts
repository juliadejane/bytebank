export function ValidaDebito(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (valorDoDebito: number) {
    if (valorDoDebito <= 0) {
      throw new Error("O valor a ser debitado precisa ser maior que 0!");
    }
    if (valorDoDebito >= this.saldo) {
      throw new Error("O seu saldo é insuficiente para realizar a operação!");
    }
    return originalMethod.apply(this, [valorDoDebito]);
  };
  return descriptor;
}

export function ValidaDeposito(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (valorDoDeposito: number) {
    if (valorDoDeposito <= 0) {
      throw new Error("O valor a ser depositado deve ser maior quer 0!");
    }
    return originalMethod.apply(this, [valorDoDeposito]);
  };
  return descriptor;
}
