<?php
namespace App\Validators;

class CCCValidator
{
    public static function validarCCC(string $ccc): bool
    {
        if (!preg_match('/^\d{20}$/', $ccc)) {
            return false;
        }

        $entidadFinanciera = substr($ccc, 0, 4);
        $oficinaFinanciera = substr($ccc, 4, 4);
        $codigoControl1 = substr($ccc, 8, 1);
        $codigoControl2 = substr($ccc, 9, 1);
        $numeroCuenta = substr($ccc, 10, 10);

        $digitosControlCalculados = self::calcularDigitosControl($ccc);
        return $codigoControl1 == $digitosControlCalculados[0] && $codigoControl2 == $digitosControlCalculados[1];

    }

    public static function calcularDigitosControl(string $ccc): array
    {
        $pesos = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];
        $digitos = "";

        /*
        Las primeras cuatro cifras de su CCC corresponden a la entidad 
        bancaria, según un registro de entidades del Banco de España 
        y las cuatro cifras siguientes que identifican la oficina, 
        añadimos dos ceros por delante.
        */
        $cadena = "00";
        $cadena .= substr($ccc, 0, 8);

        /*
        A la cadena obtenida de 10 dígitos, vamos multiplicando 
        cada dígito por su peso correspondiente, el orden viene dado 
        por la posición que ocupan cada resultado lo sumamos para obtener 
        un solo número X
        */
        $suma = 0;
        for ($i = 0; $i <= 10; $i++) {
            $suma += $pesos[$i] * $cadena[$i];
        }

        /*
        Realizamos la siguiente operación para obtener el primer número 
        del dígito de control: d= 11 –(X mod11)
        */
        $primerDigito = 11 - ($suma % 11);

        /*
        si después de la operación d es igual a 11 entonces el digito 
        de control es 0 y si d es igual a 10 entonces el dígito de 
        control es igual a 1. 
        */
        if ($primerDigito == 11) {
            $primerDigito = 0;
        } elseif ($primerDigito == 10) {
            $primerDigito = 1;
        }

        /*
        Para el segundo dígito de control operamos de la misma forma, 
        pero ahora utilizando los 10 dígitos del número de cuenta 
        */
        $numeroCuenta = substr($ccc, 10, 10);

        $suma = 0;
        for ($i = 0; $i <= 10; $i++) {
            $suma += $pesos[$i] * $numeroCuenta[$i];
        }

        $segundoDigito = 11 - ($suma % 11);
        if ($segundoDigito == 11) {
            $segundoDigito = 0;
        } elseif ($segundoDigito == 10) {
            $segundoDigito = 1;
        }

        return [$primerDigito, $segundoDigito];
    }
}
?>