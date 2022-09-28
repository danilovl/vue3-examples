import type {Ref} from 'vue'

export default interface RouteMeta {
    metaRef: Ref;
    position: number | undefined;
    display: boolean;
    title: string;
    layout: string | undefined;
}
