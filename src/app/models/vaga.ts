export default interface Vaga {
  id: number;
  descricao: string;
  reqObrigatorios: string;
  reqDesejaveis: string;
  remuneracao: number;
  aberta: boolean,
  beneficios: string;
  localTrabalho: string;
}
