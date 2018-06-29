module Main where

main = do
    putStrLn "Digite seu nome"
    nome <-getLine
    print ("Hello " ++ nome)

-- aplicação parcial de funções e tail call optimization
fatorial :: (Integral a) => a -> a
fatorial 0 = 1
fatorial n = n * fatorial (n-1)

--guards
imcPrint a p
    | imc a p <= 19 = "magro"
    | imc a p <= 25 = "normal"
    | imc a p <= 30 = "gordin"
    | otherwise = "baleia"
    where imc a p = a / p^2

cilindro r h =
    let areaL = 2*pi*r*h
        areaTopo = pi*r^2
    in areaL + 2*areaTopo

head' :: [a] -> a
head' xs = case xs of [] -> error "bla"
                      (x:_) -> x

tail' :: [a] -> [a]
tail' xs = case xs of [] -> error "bla"
                      (_:ys) -> ys

-- last' :: [a] -> a
-- last' xs = case xs of [] -> error "bla"
--                       (x:x) -> x

multThree x y z = x * y * z

-- divPorDez x = x/10
divPorDez = (/10)

compareComCem = compare 100

-- foldl foldr
-- even Num a -> Bool
-- head [a] -> a
-- tail [a] -> [a]
sum' l = somaAcumulada 0 l
    where somaAcumulada n l = 
                        if l == []
                        then n
                        else let x = head l
                                 xs = tail l
                             in if even x
                                then somaAcumulada (n+x) xs
                                else somaAcumulada n xs

sum'' l = somaAcumulada 0 l
                    where 
                        somaAcumulada n [] = n
                        somaAcumulada n (x:xs) =
                                if even x
                                then somaAcumulada (n+x) xs
                                else somaAcumulada n xs
-- f a b = f b => f a = expr
sum''' l = somaAcumulada 0 
                    where 
                        somaAcumulada n [] = n
                        somaAcumulada n (x:xs) =
                                if even x
                                then somaAcumulada (n+x) xs
                                else somaAcumulada n xs

sum'''' i = somaAcumulada 0 (filter even i) 
                    where 
                        somaAcumulada n [] = n
                        somaAcumulada n (x:xs) = somaAcumulada (n+x) xs
                                
sum''''' i = foldl somaAcumulada 0 (filter even i) 
                    where 
                        somaAcumulada n x = n + x

sum'''''' i = foldl (\n x -> n+x) 0 (filter even i)

sumSete i = foldl (+) 0 (filter even i)

 --(f . g) i = f(g(i))
sumOito = (foldl (+) 0) . (filter even) 
                    