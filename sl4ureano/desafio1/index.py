lista = ['-2', '07', '0', '-5', '8', '4']
numero_inteiro = raw_input("Digite um Numero inteiro: ")
lista.append(numero_inteiro)
maior = (max(int(number) for number in lista))
menor = (min(int(number) for number in lista))
print("Maior Numero: %s \nMenor Numero: %s" % (maior,menor))