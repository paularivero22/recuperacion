<?php
namespace Banco;

use Brick\Math\BigInteger;
use Banco\ValidadorCCC;

class ValidadorIBAN
{
    public static function validarIBAN(string $iban): bool
    {
        $correcto = false;

        if (!preg_match('/^ES\d{22}$/', $iban)) {
            return false;
        }

        $ccc = substr($iban, 4);
        $digitosControlIBAN = substr($iban, 2, 2);
        $digitosCalculados = self::calcularDigitosControl($ccc);

        if (ValidadorCCC::validarCCC($ccc) && ($digitosControlIBAN === $digitosCalculados)) {
            $correcto = true;
        }

        return $correcto;
    }

    public static function calcularDigitosControl(string $ccc): string
    {
        $ibanReordenado = $ccc . "142800";
        $numero = BigInteger::of($ibanReordenado);
        $resto = $numero->mod(97)->toInt();
        $digitosControl = 98 - $resto;

        if (strlen((string) $digitosControl) === 1) {
            $digitosControl = "0" . $digitosControl;
        } else {
            $digitosControl = (string) $digitosControl;
        }

        return $digitosControl;
    }
}
?>