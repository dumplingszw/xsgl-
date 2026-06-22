[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$filePath = 'f:\新建文件夹\site\山西工程科技职业大学2026迎新攻略.md'
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
$lines = $content -split "`n"
$textLines = @()
foreach ($line in $lines) {
    if ($line.Length -lt 500 -and $line -notmatch '^data:' -and $line -notmatch '^[\+/A-Za-z0-9]{100,}') {
        $textLines += $line
    }
}
$outputPath = 'c:\Users\13408\.trae-cn\work\6a365b388c871f416dcfee75\temp_extract.txt'
[System.IO.File]::WriteAllLines($outputPath, $textLines, [System.Text.Encoding]::UTF8)
Write-Host "Done. Total text lines: $($textLines.Count)"
