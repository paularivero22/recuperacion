<?php
namespace Banco;

use Brick\Math\BigInteger;

class ValidadorCCC
{
    public static function validarCCC(string $ccc): bool
    {
        $correcto = false;

        if (!preg_match('/^\d{20}$/', $ccc)) {
            return false;
        }

        $entidad = substr($ccc, 0, 4);
        $oficina = substr($ccc, 4, 4);
        $codigoControl1 = substr($ccc, 8, 1);
        $codigoControl2 = substr($ccc, 9, 1);
        $numeroCuenta = substr($ccc, 10, 10);

        $digitosCalculados = self::calcularDigitosControl($entidad, $oficina, $numeroCuenta);

        if ($codigoControl1 == $digitosCalculados[0] && $codigoControl2 == $digitosCalculados[1]) {
            $correcto = true;
        }
        return $correcto;
    }

    public static function calcularDigitosControl(string $entidad, string $oficina, string $numeroCuenta): array
    {
        $pesos = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];

        $cadena = "00" . $entidad . $oficina;
        $suma1 = 0;
        for ($i = 0; $i < 10; $i++) {
            $suma1 += $pesos[$i] * intval($cadena[$i]);
        }
        $digito1 = 11 - ($suma1 % 11);
        $digito1 = ($digito1 == 11) ? 0 : (($digito1 == 10) ? 1 : $digito1);

        $suma2 = 0;
        for ($i = 0; $i < 10; $i++) {
            $suma2 += $pesos[$i] * intval($numeroCuenta[$i]);
        }
        $digito2 = 11 - ($suma2 % 11);
        $digito2 = ($digito2 == 11) ? 0 : (($digito2 == 10) ? 1 : $digito2);

        return [$digito1, $digito2];
    }
}
?>
