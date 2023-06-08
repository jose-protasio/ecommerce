select  
                     e210est.qtdest,
                     e210est.qtdres,
                     e210est.qtdord,
                     e210est.qtdrae,
                     e210est.codpro,
                     e210est.codder,
                     e210est.coddep, 
                     e075pro.codori, 
                     E075PRO.USU_INDALC  
              from  
                     e075pro, 
                     e210est  
              where  
                     e210est.codemp = 1 and   
                     e075pro.codemp = e210est.codemp and   
                     e075pro.codpro = e210est.codpro and 
                     1=2  
             union all 
             select  
                     sum(e210est.qtdest) qtdest,
                     sum(e210est.qtdres) qtdres,
                     sum(e210est.qtdord) qtdord,
                     sum(e210est.qtdrae) qtdrae,
                     e210est.codpro,
                     e210est.codder,
                     case 
                       when substr(e210est.coddep,1,2) = 'AE' then 'AE' 
                       else 'VENDA' 
                     end coddep,
                     e075pro.codori, 
                     E075PRO.USU_INDALC  
              from 
                     e075pro, 
                     e210est 
              where  
                     e210est.codemp = 1 and   
                     e075pro.codemp = e210est.codemp and   
                     e075pro.codpro = e210est.codpro and 
                     e075pro.codori in ('SMN','EMB','BOT','MAG','MKT') and
                     e075pro.cdopro = 'COLETESEMFEM_G'  
                     e075pro.sitpro = 'A' and  
                     e210est.sitest = 'A' and  
                     e075pro.USU_ClicVen  = 'S' and  
                     (e210est.coddep in ('AE','90','EXPO','MKT') or e210est.nivdep = 3 or substr(e210est.coddep,1,2) = 'AE') and 
                     (exists (select 1 from e210mvp where e210mvp.codemp = e210est.codemp and 
                                                         e210mvp.codpro = e210est.codpro and  
                                                         e210mvp.datmov > (trunc(sysdate)-90)) or  
                      exists (select 1 from e420ipo ,e420ocp where e420ipo.codemp = e420ocp.codemp and 
                                                                   e420ipo.codfil = e420ocp.codfil and 
                                                                   e420ipo.numocp = e420ocp.numocp and
                                                                   e420ipo.codemp = e075pro.codemp and 
                                                                   e420ipo.codpro = e075pro.codpro and 
                                                                   e420ipo.sitipo in (1,2)) or e210est.qtdest > 0 or e210est.qtdres > 0 or e210est.qtdrae > 0 or e075pro.datger > (trunc(sysdate)-90)) 
              group by 
                     e210est.codpro,
                     e210est.codder,
                     case 
                       when substr(e210est.coddep,1,2) = 'AE' then 'AE' 
                       else 'VENDA' 
                     end, 
                     e075pro.codori, 
                     E075PRO.USU_INDALC 
              union all  
              select  
                    e120ipd.qtdped*-1 qtdest, 
                    0 qtdres, 
                    0 qtdord, 
                    0 qtdrae, 
                    e120ipd.codpro,
                    e120ipd.codder,
                    'EXPO' coddep, 
                    e075pro.codori,
                    'N' USU_INDALC 
              from e120ipd,e075pro where  
                    e120ipd.codemp = 1 and
                    e120ipd.codfil = 1 and 
                    e120ipd.codemp = e075pro.codemp and  
                    e120ipd.codpro = e075pro.codpro and 
                    e120ipd.sitipd = 9   
              order by 5,6,8