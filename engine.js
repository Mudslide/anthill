# -*- coding: utf-8 -*-
import sys, math, pygame;
from enviro import *;
pygame.init();

def Window(width, height):
 return pygame.display.set_mode((width, height));

class World:
 map = [];
 
 def xy(x,y):
  try:
   return World.map[x][y];
  except IndexError:
   return False;
 
 def qr(q,r):
  try:
   return World.map[r][q+math.ceil(r/2)];
  except IndexError:
   return False;

class Cell:
 def __init__(self,x,y):
  self.coord = [x,y];
  self.domNode = Element("cell");
 
 def xy(self,x,y): #Even row system
  try:
   x,y;
   try:
    del World.map[coord[0]][coord[1]];
   except IndexError:
    pass;
   coord = [x,y];
   World.map[x][y] = self;
  except NameError:
   return [coord[0], coord[1]];
 
