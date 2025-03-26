<?php
namespace App\Validators;
use Brick\Math\BigInteger;

class IBANValidator {
    public static function validarIBAN(string $iban): bool{
        if(!preg_match('/^ES\d{22}$/',$iban)) {
            return false;
        }

        $digitosControl = substr($iban, 2, 2);
        $ccc = substr($iban, 4, 20);
        

    }

    public static function calcularDigitosControl(string $ccc): string {

    }
}
?>