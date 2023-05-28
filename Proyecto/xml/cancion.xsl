<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="cancion.css"/>
			</head>
			<body>
				<xsl:apply-templates/>
			</body>
		</html>
	</xsl:template>
	<xsl:template match="titulo">
		<h1>
			<xsl:value-of select="."/>
		</h1>
	</xsl:template>
	<xsl:template match="autor">
		<h2>
			<xsl:value-of select="."/>
		</h2>
	</xsl:template>
	<xsl:template match="estrofa">
		<xsl:for-each select=".">
			<h3></h3>
			<xsl:for-each select="verso">
				<p>
					<span><xsl:value-of select="."/></span>
				</p>
			</xsl:for-each>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>