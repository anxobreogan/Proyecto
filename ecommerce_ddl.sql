-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: Proyecto_Ecommerce
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ayuntamientos`
--

DROP TABLE IF EXISTS `ayuntamientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ayuntamientos` (
  `idayuntamientos` int(11) NOT NULL AUTO_INCREMENT,
  `ayuntamientos` varchar(200) NOT NULL,
  `idtipolocalizacion` int(11) NOT NULL,
  `tipolocalizacion` int(11) NOT NULL,
  `idprovincias` int(11) NOT NULL,
  PRIMARY KEY (`idayuntamientos`),
  KEY `fk_ayuntamientos_1_idx` (`idtipolocalizacion`),
  KEY `fk_ayuntamientos_2_idx` (`idprovincias`),
  CONSTRAINT `fk_ayuntamientos_1` FOREIGN KEY (`idtipolocalizacion`) REFERENCES `tipo_localizacion` (`idtipo_localizacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ayuntamientos_2` FOREIGN KEY (`idprovincias`) REFERENCES `provincias` (`idprovincias`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ayuntamientos`
--

LOCK TABLES `ayuntamientos` WRITE;
/*!40000 ALTER TABLE `ayuntamientos` DISABLE KEYS */;
/*!40000 ALTER TABLE `ayuntamientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cesta`
--

DROP TABLE IF EXISTS `cesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cesta` (
  `idcesta` int(11) NOT NULL AUTO_INCREMENT,
  `idusuarios` int(11) NOT NULL,
  `idproducto` int(11) NOT NULL,
  `fechacompra` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcesta`),
  KEY `fk_cesta_1_idx` (`idusuarios`),
  KEY `fk_cesta_2_idx` (`idproducto`),
  CONSTRAINT `fk_cesta_1` FOREIGN KEY (`idusuarios`) REFERENCES `usuarios` (`idusuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_cesta_2` FOREIGN KEY (`idproducto`) REFERENCES `producto` (`idproducto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cesta`
--

LOCK TABLES `cesta` WRITE;
/*!40000 ALTER TABLE `cesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `cesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localizacion`
--

DROP TABLE IF EXISTS `localizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `localizacion` (
  `idlocalizacion` int(11) NOT NULL AUTO_INCREMENT,
  `idtipo` int(11) NOT NULL,
  `coordenadalat` decimal(10,0) NOT NULL,
  `coordenadalongitud` decimal(10,0) NOT NULL,
  PRIMARY KEY (`idlocalizacion`),
  KEY `fk_localizacion_1_idx` (`idtipo`),
  CONSTRAINT `fk_localizacion_1` FOREIGN KEY (`idtipo`) REFERENCES `tipo_localizacion` (`idtipo_localizacion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localizacion`
--

LOCK TABLES `localizacion` WRITE;
/*!40000 ALTER TABLE `localizacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `localizacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido` (
  `idpedido` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idusuario` int(11) NOT NULL,
  `unidades` int(11) NOT NULL,
  `idproducto_localizacion` int(11) NOT NULL,
  PRIMARY KEY (`idpedido`),
  KEY `fk_pedido_1_idx` (`idusuario`),
  KEY `fk_pedido_2_idx` (`idproducto_localizacion`),
  CONSTRAINT `fk_pedido_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_2` FOREIGN KEY (`idproducto_localizacion`) REFERENCES `producto_localizacion` (`idproducto`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `idproducto` int(11) NOT NULL AUTO_INCREMENT,
  `producto` varchar(255) NOT NULL,
  `precio` varchar(255) NOT NULL,
  `descripcioncorta` varchar(45) NOT NULL,
  `descripcioncompleta` varchar(45) NOT NULL,
  PRIMARY KEY (`idproducto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_localizacion`
--

DROP TABLE IF EXISTS `producto_localizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto_localizacion` (
  `idproducto` int(11) NOT NULL AUTO_INCREMENT,
  `idlocalizacion` int(11) NOT NULL,
  PRIMARY KEY (`idproducto`,`idlocalizacion`),
  KEY `fk_producto_localizacion_2_idx` (`idlocalizacion`),
  CONSTRAINT `fk_producto_localizacion_1` FOREIGN KEY (`idproducto`) REFERENCES `producto` (`idproducto`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_localizacion_2` FOREIGN KEY (`idlocalizacion`) REFERENCES `localizacion` (`idlocalizacion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_localizacion`
--

LOCK TABLES `producto_localizacion` WRITE;
/*!40000 ALTER TABLE `producto_localizacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_localizacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincias`
--

DROP TABLE IF EXISTS `provincias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincias` (
  `idprovincias` int(11) NOT NULL AUTO_INCREMENT,
  `idtipolocalizacion` int(11) NOT NULL,
  `provincias` varchar(200) NOT NULL,
  `tipolocalizacion` int(11) NOT NULL,
  `idayuntamientos` int(11) NOT NULL,
  PRIMARY KEY (`idprovincias`),
  KEY `fk_provincias_1_idx` (`idtipolocalizacion`),
  KEY `fk_provincias_2_idx` (`idayuntamientos`),
  CONSTRAINT `fk_provincias_1` FOREIGN KEY (`idtipolocalizacion`) REFERENCES `tipo_localizacion` (`idtipo_localizacion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_provincias_2` FOREIGN KEY (`idayuntamientos`) REFERENCES `ayuntamientos` (`idayuntamientos`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincias`
--

LOCK TABLES `provincias` WRITE;
/*!40000 ALTER TABLE `provincias` DISABLE KEYS */;
/*!40000 ALTER TABLE `provincias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_localizacion`
--

DROP TABLE IF EXISTS `tipo_localizacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_localizacion` (
  `idtipo_localizacion` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_localizacion` varchar(200) NOT NULL,
  PRIMARY KEY (`idtipo_localizacion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_localizacion`
--

LOCK TABLES `tipo_localizacion` WRITE;
/*!40000 ALTER TABLE `tipo_localizacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_localizacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `idusuarios` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `activatedat` datetime DEFAULT NULL,
  `createdat` datetime NOT NULL,
  PRIMARY KEY (`idusuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (29,NULL,'anxo001@yopmail.com','$2b$10$ZPzK38ObEfGyb4wtXsRie.aBBkIspZalBHMz5Qq/RpG0wIgEnCfGq',NULL,'2019-04-03 09:19:52'),(30,NULL,'anxo001@yopmail.com','$2b$10$d36s8865uq8URedh8k3Gh.LvyfVorORR.o2HoGqQVq6ih19fmLA9i',NULL,'2019-04-03 09:20:10'),(31,NULL,'anxo001@yopmail.com','$2b$10$u86n6788ymvpO6K5cyziLudq/df9Xy9F0kH/579GHSC/gyLYRuJt2',NULL,'2019-04-03 09:21:30'),(32,NULL,'anxo001@yopmail.com','$2b$10$4jD99o5BEzEvStZjPukRG.hwTvEFOleuSXUPY01TrTIfq5PGrm5cy',NULL,'2019-04-03 09:21:40'),(33,NULL,'anxo001@yopmail.com','$2b$10$ViIGqahPezMc9gqwT8DvtOstJjn1EEu5OEe7RTni4eh9OEzuJgnye',NULL,'2019-04-03 09:22:23'),(34,NULL,'anxo001@yopmail.com','$2b$10$Huxf1AjT4ROWSag2nO2P4.OeEDcKJPHOdVH7emKG7vgXoQHvzT4wi',NULL,'2019-04-03 09:22:47'),(35,NULL,'anxo001@yopmail.com','$2b$10$ie/nO1HnjtaYQUGhJV9KiuHvXFG8Ap7XKvJxx0wOReR0y3koMVY.u',NULL,'2019-04-03 09:23:08'),(36,NULL,'anxo001@yopmail.com','$2b$10$l4.1R2cSUA.E8BffUtFpRetUOrSKAk4g3iFw4fWkFemxcMpt1.3G6',NULL,'2019-04-03 09:23:51'),(37,NULL,'anxo001@yopmail.com','$2b$10$UWAQZhU10wZwYx9T8Pyou.K2GGRvNEgHbVGbp2VnxC5pbMIT0Opu6',NULL,'2019-04-03 09:24:43'),(38,NULL,'anxo001@yopmail.com','$2b$10$jc9KhoZRFZrl9ZQcMRy18.haYgczP0DgMCnZI4ClaOdA.JhY2yi06',NULL,'2019-04-03 09:24:53'),(39,NULL,'anxo001@yopmail.com','$2b$10$Xkc8VW/5jdEmLrmS3rX8IOp8IqQilaDxK5nHV0FfONjAiMpLEfz/O',NULL,'2019-04-03 09:25:53'),(40,NULL,'anxo001@yopmail.com','$2b$10$LOqCQ6yfMtzkSLwq0ii3oejDG3FfoCoEg1LApLnipvqYKFgHmrU/m',NULL,'2019-04-03 09:26:12'),(41,NULL,'anxo001@yopmail.com','$2b$10$oYkYBtM.mQJL76mxw3Qszu8uAxBjI1XPmX3IoXcNkPztAmfSRi4ny',NULL,'2019-04-03 09:26:46'),(42,NULL,'anxo001@yopmail.com','$2b$10$dHQ/qBJJyMqzbijuydwi1uRmdYKtvlHFeoTYBi0RBjBoee88nwzNm',NULL,'2019-04-03 09:29:04'),(43,NULL,'anxo001@yopmail.com','$2b$10$NeLf9A.4k.gAXPDG5TbIbu5Ggy72wbzXfdqjYxP08i/MjMnYfeEPe',NULL,'2019-04-03 09:45:03');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verificacion`
--

DROP TABLE IF EXISTS `verificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `verificacion` (
  `idverificacion` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `usuariouuid` varchar(255) NOT NULL DEFAULT 'DEFAULT',
  `verificacioncodigo` varchar(255) NOT NULL,
  `createdat` datetime NOT NULL,
  `verificatedat` datetime DEFAULT NULL,
  PRIMARY KEY (`idverificacion`),
  KEY `fk_verificacion_1_idx` (`usuariouuid`),
  KEY `fk_verificacion` (`usuariouuid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verificacion`
--

LOCK TABLES `verificacion` WRITE;
/*!40000 ALTER TABLE `verificacion` DISABLE KEYS */;
INSERT INTO `verificacion` VALUES (12,'DEFAULT','992d8203-e4be-4b83-b9cf-9ca346154fea','2019-04-03 09:29:04','2019-04-03 09:30:07'),(13,'DEFAULT','6817cb65-b231-40ae-bf00-849413af896d','2019-04-03 09:45:03','2019-04-03 09:45:15');
/*!40000 ALTER TABLE `verificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'Proyecto_Ecommerce'
--

--
-- Dumping routines for database 'Proyecto_Ecommerce'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-03 15:12:49
